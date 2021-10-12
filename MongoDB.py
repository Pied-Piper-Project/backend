from pymongo import MongoClient
import certifi


def main():

    ca = certifi.where()
    client = MongoClient('mongodb+srv://<your username>:<your password>@cluster0.gudfj.mongodb.net/ResearchU?'
                         'retryWrites=true&w=majority', tlsCAFile=ca) # MongoClient requires TLS certificate and
                                                                    # sometimes python is unable to request the TLS
                                                                      # so specify to use certifi package
    db = client.ResearchU
    research = db.research
    researchOpportunity = {
        'name': 'Title of Research Opportunity',
        'professor': 'Dr. Fossati',
        'school': 'Emory University',
        #school logo
        'department': 'Computer Science',
        'postBody': 'Description of Research Opportunity',
        'isOnline': 'In-person / Remote',
        'location': '400 Downman Dr, Atlanta, GA 30307',
        'activePost': True,
        'semester': 'Spring 2022',
        'dataRange': '01/30/2022 - 04/30/2022',
        'timeRange': '8:00 AM - 11:00 AM',
        'isPaid': True,
        'payAmount': 15,
        'requirements': { 
            'gpa': 3.5,
            'isGrad': False,
            'year': 'Senior',
            'prerequisites': 'CS 326 and CS 350',
            'major': 'Computer Science'
        }
    }
    research.insert_one(researchOpportunity)

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
