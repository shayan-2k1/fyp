import random
import pandas as pd

data = []

def generate_unique_data(data):
    name_set = set()
    cgpa_set = set()

    for _ in range(500):
        name = f"Person{_}"
        cgpa = round(random.uniform(2.5, 4.0), 2)

        # Ensure unique Name and CGPA combination
        while (name, cgpa) in zip(name_set, cgpa_set):
            name = f"Person{_}"
            cgpa = round(random.uniform(2.5, 4.0), 2)

        name_set.add(name)
        cgpa_set.add(cgpa)

        education_level = random.choice(["BS", "Masters", "PhD"])
        country_preference = random.choice(["USA", "Canada", "UK", "Australia"])
        budget_preference=random.choice([0.5,1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5])*1000
        domain_area = random.choice(["Computer Science", "Medical Science", "Fine Arts", "Physics", "Business Administration", "Electrical Engineering", "Medical Research", "History", "Chemistry", "Finance"])

        data.append([name, cgpa, budget_preference, education_level, country_preference, domain_area])

# Generate unique data
generate_unique_data(data)

# Create a DataFrame and export to CSV
df = pd.DataFrame(data, columns=["Name", "CGPA", "Budget_Prefrence", "Education_Level", "Country_Preference", "Domain_Area"])
df.to_csv("student_dataset.csv", index=False)
