from django.shortcuts import render
from pymongo import MongoClient

def your_view(request):
    # Connect to MongoDB
    client = MongoClient("mongodb://localhost:27017")

    # Access the desired database and collection
    db = client.hackathon
    collection = db.test

    # Fetch records from the collection
    records = collection.find()

    # Convert the cursor to a list (if needed)
    records_list = list(records)
    print(records_list)
    # You can now pass 'records_list' to your template or process it further

    return render(request, 'your_template.html', {'records': records_list})