import random
import pandas as pd

data = []

def generate_unique_data(data):
    name_set = set()
    budget_set = set()

    for _ in range(3000):
        name = f"Scholarship{_}"
        budget_limit=random.choice([0.5,1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5])*1000

        # Ensure unique Name and Budget combination
        while (name, budget_limit) in zip(name_set, budget_set):
            name = f"Scholarship{_}"
            budget_limit=random.choice([0.5,1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5])*1000

        name_set.add(name)
        budget_set.add(budget_limit)

        education_level = random.choice(["Bachelor", "Master", "PhD"])
        country = random.choice(["USA", "Canada", "UK", "Australia"])
        domain_area = random.choice(["Computer Science", "Medical Science", "Fine Arts", "Physics", "Business Administration", "Electrical Engineering", "Medical Research", "History", "Chemistry", "Finance"])

        scholarship_type = random.choice(["Need-Based", "Merit-Based"])

        data.append([name, scholarship_type, budget_limit, education_level, country, domain_area])

# Generate unique data
generate_unique_data(data)

# Create a DataFrame and export to CSV
df = pd.DataFrame(data, columns=["Scholarship_Name","Scholarship_Type", "Scholarship_Budget", "Education_Preference", "Country_of_Scholarship", "Eligible_Domain"])
df.to_csv("scholarship_dataset.csv", index=False)