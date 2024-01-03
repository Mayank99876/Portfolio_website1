from flask import Flask, g, request
from flask_cors import CORS
import pymysql
import logging
import datetime

app = Flask(__name__)
CORS(app)

@app.before_request
def before_request():
    g.db = pymysql.connect(host="localhost", user="root", password="9982399264", db="portfolio_website", autocommit=True)
    g.cursor = g.db.cursor()


@app.teardown_request
def teardown_request(exception):
    g.db.close()
    g.cursor.close() 
     

@app.route("/api/recommendations", methods = ["GET"])
def get_recommendations():
    try:
        query = "SELECT * FROM recommendations WHERE onShowcase=True;"
        g.cursor.execute(query)
        recommendations = g.cursor.fetchall()

        result = []
        for recommendation in recommendations:
            recommendation_obj = {
            "id" : recommendation[0],
            "name" : recommendation[1],
            "company" : recommendation[3],
            "designation" : recommendation[4],
            "message"  : recommendation[5],
           }
            result.append(recommendation_obj)
        
        return {"isSuccessful" : True, "results" : result}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful" : False, "results" : []}

@app.route("/api/skills", methods = ["GET"])
def get_skills():
    try:
        query = "SELECT * FROM skills;"
        g.cursor.execute(query)
        skills = g.cursor.fetchall()

        result = []
        for skill in skills:
            skill_obj = {
            "id" : skill[0],
            "name" : skill[1],
            "imageUrl" : skill[2],
            "starsTotal" : skill[3],
            "starsActive"  : skill[4],
           }
            result.append(skill_obj)

        return {"isSuccessful" : True, "results" : result}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful" : False, "results" : []}
    
@app.route("/api/projects", methods = ["GET"])
def get_projects():
    try:
        
        query = "SELECT * FROM projects WHERE isPublished=True ORDER BY lastModified DESC;"
        g.cursor.execute(query)
        projects = g.cursor.fetchall()

        results = []
        for project in projects:
            project_obj = {
            "id" : project[0],
            "title" : project[1],
            "imageUrl" : project[2],
            "excerpt" : project[3],
            "body"  : project[4],
           }
            results.append(project_obj)
       
        return {"isSuccessful" : True, "results" : results}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful" : False, "results" : []}
    
@app.route("/api/blogs", methods = ["GET"])
def get_blogs():
    try:
        
        query = "SELECT * FROM blogs WHERE isPublished=True ORDER BY lastModified DESC;"
        g.cursor.execute(query)
        blogs = g.cursor.fetchall()

        result = []
        for blog in blogs:
            blog_obj = {
            "id" : blog[0],
            "title" : blog[1],
            "imageUrl" : blog[2],
            "excerpt" : blog[3],
            "body"  : blog[4],
           }
            result.append(blog_obj)
       
        return {"isSuccessful" : True, "results" : result}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful" : False, "results" : []}    

@app.route("/api/project", methods=["POST"])
def add_project():
    try:
        project = request.json
        print(project)
        # SQL query
        query = ("INSERT INTO projects VALUES(%s,%s,%s,%s,%s,%s,%s);")
        g.cursor.execute(query,[project["id"],project["imageUrl"],project["title"],project["excerpt"],project["body"],True,datetime.datetime.now()],)
        return {"isSuccessfull" : True}
    except Exception as e:
        logging.error(e)
        return {"isSuccessfull" : False}    

@app.route("/api/blog", methods=["POST"])
def add_blog():
    try:
        blog = request.json
        # SQL query
        query = "INSERT INTO blogs VALUES(%s, %s, %s, %s, %s, %s, %s);"

        g.cursor.execute(
            query,
            [
                blog["id"],
                blog["imageUrl"],
                blog["title"],
                blog["excerpt"],
                blog["body"],
                True,
                datetime.datetime.now(),
            ],
        )
        return {"isSuccessful": True}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False}

@app.route("/api/recommendation", methods=["POST"])
def add_recommendation():
    try:
        recommendation = request.json
        # SQL query
        query = "INSERT INTO recommendations VALUES(%s, %s, %s, %s, %s, %s, %s);"

        g.cursor.execute(
            query,
            [
                recommendation["id"],
                recommendation["name"],
                recommendation["email"],
                recommendation["company"],
                recommendation["designation"],
                recommendation["message"],
                False,
            ],
        )
        return {"isSuccessful": True}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False}


@app.route("/api/contact", methods=["POST"])
def add_contact():
    try:
        contact = request.json
        # SQL query
        query = "INSERT INTO contact VALUES(%s, %s, %s, %s);"

        g.cursor.execute(
            query,
            [
                contact["name"],
                contact["email"],
                contact["description"],
                datetime.datetime.now(),
            ],
        )
        return {"isSuccessful": True}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False}


@app.route("/api/project", methods=["GET"])
def get_project_by_id():
    try:
        id = request.args.get("id")
        # SQL query
        query = "SELECT imageUrl, title, body FROM projects WHERE id=%s;"

        g.cursor.execute(query, [id])

        project = g.cursor.fetchone()

        project_obj = {"imageUrl": project[0], "title": project[1], "body": project[2]}

        return {"isSuccessful": True, "result": project_obj}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False, "result": {}}


# if __name__ != "__main__":
#     gunicorn_logger = logging.getLogger("gunicorn.error")
#     app.logger.handlers = gunicorn_logger.handlers
#     app.logger.setLevel(gunicorn_logger.level)

app.run(debug=True)
