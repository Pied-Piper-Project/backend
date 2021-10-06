from pymongo import MongoClient
import certifi


def main():

    ca = certifi.where()
    client = MongoClient('mongodb+srv://<your username>:<your password>@cluster0.gudfj.mongodb.net/ResearchU?'
                         'retryWrites=true&w=majority', tlsCAFile=ca) # MongoClient requires TLS certificate and
                                                                    # sometimes python is unable to request the TLS
                                                                      # so specify to use certifi package
    db = client.ResearchU
    # research = db.research
    # researchOpportunity = {
    #     'name': 'Dr. Fossati',
    #     'description': 'A Test research opportunity'
    # }
    # research.insert_one(researchOpportunity)

    # profile = db.studentProfile
    # student = {
    #     'name': 'Abraham Arevalo',
    #     'Major': 'Computer Science'
    # }
    # profile.insert_one(student)
    # profile = db.professorProfile
    # professor = {
    #     'Name': 'Dr. Fossati',
    #     'School': 'Emory University',
    #     'Research' : True
    # }
    # profile.insert_one(professor)

    # adminprofile = db.adminProfile
    # admin = {
    #     'Name': 'Jane Doe',
    #     'Admin Status': True
    # }
    # adminprofile.insert_one(admin)
    # print(client.ResearchU.research.find_one({'name': 'Abraham Arevalo'}))


if __name__ == "__main__":
    main()
