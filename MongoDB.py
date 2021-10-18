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

    #adding example student profile
    Student = db.studentProfile
    student = {
        'name': 'Carol Tang',
        'school': 'Emory University',
        'id': 2311944,
        'major': 'Computer Science',
        'minor': 'French Studies',
        'onCampus': True,
        #image
        'contact': 'carol.tang@emory.edu',
        'experience': {
            'languages': ['Java', 'Python'],
            'technologies': ['git', 'GitHub', 'Jira'],
            'topics': ['deep learning', 'text processing']
        },
        'year': 'senior',
        'isGrad': False,
        'gpa': 3.65,
        'aboutThem': 'Have experience in pretty much nothing'
    }
    Student.insert_one(student)

    #adding example admin profile
    Admin = db.adminProfile
    admin = {
        'name': 'Emily Morran',
        'school': 'Emory University',
        'id': 334455,
        'department': 'Chemistry',
        'onCampus': True,
        'experience': {
            'work': ['English Interventionist-Reading and Writing Teacher', 'Undergraduate Program Coordinator'],
        },
        'contact': {
            'email': 'emily.morran@emory.edu',
            'phone': '4047276492',
            'location': 'Atwood 380P'
        },
        'aboutThem': 'something about Emily Morran',
        #image
        'departmentProfessors': {
            'Simon Blakey': 'http://chemistry.emory.edu/home/people/',
            'John Heemsmtra': 'http://chemistry.emory.edu/home/people/',
        }
    }
    Admin.insert_one(admin)




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
