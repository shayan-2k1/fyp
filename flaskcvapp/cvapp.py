import logging
import io
import re
from flask import Flask, request, jsonify

app = Flask(__name__)

# Set up logging configuration
logging.basicConfig(filename='flask.log', level=logging.DEBUG)
#node_backend_url = 'http://127.0.0.1:3000/document/extractedData'


def extract_education_info(text):
    education_info = {}
    result = {}
    
    # Extract education information using regular expressions
    education_pattern = r"Education\n(.*?)\nMajors"
    match = re.search(education_pattern, text, re.DOTALL)
    
    if match:
        education_text = match.group(1)
        
        # Extracting degree, year, and degree abbreviation
        degrees = re.findall(r"([^0-9]+)\s+(\d{4})\n(\w+)\((\w+)\)", education_text)
        if degrees:
            for degree, year, degree_abbr1, degree_abbr2 in degrees:
                degree_name_parts = degree.strip().split(' ')
                degree_name = ' '.join(degree_name_parts[:-1])
                degree_year = int(year)
                
                # Splitting degree abbreviation
                degree_abbr_var1 = degree_abbr1
                degree_abbr_var2 = degree_abbr2
                
                # Store information in dictionary
                education_info[degree_name] = {'year': degree_year, 'degree': degree_abbr_var1, 'discipline': degree_abbr_var2}
    
    result['education_info'] = education_info
    result['university_name'] = degree_name
    result['degree_year'] = degree_year
    result['degree_level'] = degree_abbr_var1
    result['degree_discipline'] = degree_abbr_var2
    
    print("university_name", degree_name)
    print("degree_year", degree_year)
    print("degree_level", degree_abbr_var1)
    print("degree_discipline", degree_abbr_var2)
    
    return result


def extract_personal_info(text):
    personal_info = {}
    personal_pattern = r"(\w+)\s+(\w+)\n(\d{11})(\S+@\S+)\n(.*?)\nLinkedIn:\s+(https?://\S+)"
    match = re.search(personal_pattern, text)
    if match:
        first_name, last_name, phone, _, email, linkedin = match.groups()
        personal_info['first_name'] = first_name.strip()
        personal_info['last_name'] = last_name.strip()
        personal_info['phone'] = phone.strip()
        personal_info['email'] = email.strip()
        personal_info['linkedin'] = linkedin.strip()
    return personal_info




@app.route('/extract_cv_data', methods=['POST'])
def extract_cv_data():
    # Check if 'fileUrl' is present in the request data
    if 'fileUrl' not in request.json:
        error_message = 'No file URL provided in request'
        logging.error(error_message)
        return jsonify({'error': error_message}), 400

    # Get the file URL from the request data
    file_url = request.json['fileUrl']

    # Now you can use the file URL for further processing
    try:
        # Fetch the PDF file from the provided URL (you may need to install libraries like requests)
        import requests
        response = requests.get(file_url)
        pdf_bytes = response.content

        # Use io.BytesIO to create a file-like object from the bytes
        pdf_file = io.BytesIO(pdf_bytes)

        # Extract text from the PDF
        import pdfplumber
        with pdfplumber.open(pdf_file) as pdf:
            text = ''
            for page in pdf.pages:
                text += page.extract_text()

        print("Extracted Text:")
        print(text)
        # Extract education and personal information
        # Extract education and personal information
        result = extract_education_info(text)
        personal_info = extract_personal_info(text)

        # Return the extracted information in the response
        response_data = {
            'education_info': result,
            'personal_info': personal_info
        }
        

        print("\nPersonal Information:")
        for key, value in personal_info.items():
            print(f"{key}: {value}")
        # Print the extracted information to the terminal
        # print("\nEducation Information:")
        # for degree, info in education_info.items():
        #     print(f"{degree}: {info['year']}")

        

        return jsonify(response_data), 200  # Return an empty response with 200 status code

    except Exception as e:
        error_message = f'Error processing PDF: {str(e)}'
        logging.error(error_message)
        print(error_message)  # Print the error message to the terminal
        return '', 500  # Return an empty response with 500 status code

if __name__ == '__main__':
    app.run(debug=True)
