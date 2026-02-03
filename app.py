from flask import Flask, render_template
import datetime

app = Flask(__name__)

@app.route('/')
def home():
    # Footer ke liye current year aur time
    now = datetime.datetime.now()
    current_year = now.year
    current_time = now.strftime("%I:%M:%S %p")

    # Website ka sara data
    data = {
        # --- HERO SECTION ---
        "name": "DEVESH",
        "title": "SOFTWARE DEVELOPER",
        "location": "BASED IN INDIA",
        
        # --- ABOUT SECTION ---
        "bio_headline": "CRAFTING ROBUST DIGITAL SOLUTIONS",
        "bio_text": "I'm Devesh, a passionate Software Developer specializing in backend systems and efficient algorithms. My focus is on building scalable applications using Java, Python, and C++. I bring a problem-solving mindset to every project, ensuring high-performance and reliable results.",
        
        # --- SKILLS SECTION ---
        "skills": [
            "JAVA", "PYTHON", "C++", "DJANGO", "STREAMLIT",
            "SQL", "DATA STRUCTURES", "ALGORITHMS", "GIT", "VS CODE"
        ],
        
        # --- PROJECTS SECTION (Drive + Dreamywalls) ---
        "projects": [
            {
                "title": "AI NUTRITION APP",
                "category": "STREAMLIT / AI",
                # Aapke static folder mein ye photo 'nutrition.jpg' naam se hai
                "image": "nutrition.jpg"
            },
            {
                "title": "VIRTUAL HOSPITAL",
                "category": "FULL STACK / DJANGO",
                # Aapke static folder mein ye photo 'hospital_proje.png' naam se hai
                "image": "hospital_proje.png"
            },
            {
                "title": "PDF SUMMARIZER",
                "category": "AI / NLP TOOL",
                # Iske liye filhal 'ai_project.png' use kar rahe hain
                "image": "ai_project.png"
            },
            {
                "title": "DOCLOC",
                "category": "HEALTHCARE TECH",
                # IMPORTANT: Is naam ki photo static folder mein daalni hogi
                "image": "docloc.png"
            },
            {
                "title": "BIRTHDAY SURPRISE",
                "category": "CREATIVE WEB DESIGN",
                # IMPORTANT: Is naam ki photo static folder mein daalni hogi
                "image": "birthday.png"
            },
            {
                "title": "DREAMYWALLS",
                "category": "E-COMMERCE BUSINESS",
                # Aapke static folder mein ye photo 'dreamywalls.jpg' naam se hai
                "image": "dreamywalls.jpg"
            }
        ],

        # --- CONTACT SECTION ---
        "email": "contact@devesh.dev",
        "social": [
            {
                "name": "LINKEDIN", 
                "url": "https://www.linkedin.com/in/devesh-tripathi-176859203"
            },
            {
                "name": "INSTAGRAM", 
                "url": "https://www.instagram.com/dev______esh?igsh=MTR4cmNqNWx4emc1OQ=="
            },
            {
                "name": "GITHUB", 
                "url": "#"
            }
        ]
    }

    return render_template('index.html', user=data, year=current_year, time=current_time)

if __name__ == '__main__':
    app.run(port=8000, debug=True)