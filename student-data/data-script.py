import pandas as pd
import random

# Generate 2978 additional rows
data = []
for _ in range(2978):
    name = f"Person{_}"
    cgpa = round(random.uniform(2.5, 4.0), 2)
    study_preference = random.choice(["Engineering", "Medicine", "Art and Design", "Science", "Commerce", "Humanities"])
    education_level = random.choice(["Bachelor", "Master", "PhD"])
    country = random.choice(["USA", "Canada", "UK", "Australia"])
    domain_area = random.choice(["Computer Science", "Medical Science", "Fine Arts", "Physics", "Business Administration", "Electrical Engineering", "Medical Research", "History", "Chemistry", "Finance"])

    data.append([name, cgpa, study_preference, education_level, country, domain_area])

# Create a DataFrame and export to CSV
df = pd.DataFrame(data, columns=["Name", "CGPA", "Study_Preference", "Education_Level", "Country", "Domain_Area"])
df.to_csv("large_dataset.csv", index=False)