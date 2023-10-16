import {studentModel} from "../models/student.model.js";
// import jwt from "jsonwebtoken";

 async function signup(req,res){
    
    try{

        let {username, password, email,phoneNo} = req.body;
        console.log(req.body);
        
        
        if(!username || !password || !email || !phoneNo){
            return res.status(400).json({message : "Enter all fields!"}) 
        }
        else{
        let existuser= await studentModel.findOne({email:email})
        //after search from database check email
        if(existuser){
            return res.status(400).json({message : "user already exits!"})
        }

        else{
            let user=new studentModel({
                username,
                password,
                email,
                phoneNo
                });
                await user.save();
                res.status(200).json(user)
                console.log("Signup successful");
              
                
        }
    
      }
    }catch(error){
 
        res.status(400).json({error:error , message:"user not created" })
    }

}


async function signin(req, res) {
    const { email, password } = req.body;
  
    try {
      const foundUser = await studentModel.findOne({ email });
  
      if (!foundUser) {
        return res.status(404).send({ message: 'User not found' });
      }
  
      if (password !== foundUser.password) {
        return res.status(400).send({ message: 'Password not matched' });
      }
  
      const token = jwt.sign(
        {
          id: foundUser._id,
          
        },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
      );
  
      res.cookie('auth_token', token, { httpOnly: true });
      // const response = await fetch(`/jobs/${foundUser._id}`);
      // if (response.ok) {
      // const jobs = await response.json();
      // // display the list of jobs in the UI
      // console.log(jobs);
    
      res.status(200).send({ user: foundUser, token });
    } catch (error) {
      res.status(500).send({ error });
    }
  }
  
  async function update(req, res) {
    const { email, password } = req.body;
    
    try {
      const foundUser = await studentModel.findOne({ email });
      
      if (!foundUser) {
        return res.status(404).send({ message: 'User not found' });
      }
      
      foundUser.password = password;
      await foundUser.save();
      
      return res.status(200).send({ message: 'Password updated successfully' });
    } catch (error) {
      return res.status(500).send({ message: 'Internal server error' });
    }
  }
  


export const studentController = {
    signup,
    signin,
    update
};