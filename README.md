# Dynamic Academic Course Recommendation Website

This is a self-contained dynamic website for the project **An Explainable and Fairness-Aware AI Framework for Academic Performance Prediction and Personalized Course Recommendation**.

The app lets a student enter:

- academic history and academic score
- strong and weak subjects
- interests
- current skills
- projects or experience
- career priority, learning style, timeline, and weekly learning time

It then generates:

- strongest interest / career track
- interest match scores
- recommended courses
- skill gaps
- career roles to explore
- learning roadmap
- explainability factors

Current supported tracks include Data Analytics, Artificial Intelligence, Web Development, Cybersecurity, Cloud/DevOps, Product/UX, and Medicine/Healthcare.

## Run on Desktop

1. Open `index.html` in any modern browser.
2. Fill in the student profile form.
3. Click `Generate Recommendations`.

No server, database, WordPress, or internet connection is required.

## Files

- `index.html` - page structure, profile form, and result sections
- `styles.css` - complete responsive styling
- `script.js` - dynamic recommendation and explainability logic
- `assets/framework-dashboard.png` - local visual asset used in the hero section

## Notes

The recommender uses transparent rule-based scoring so it can run fully offline on a desktop. For a final research implementation, connect the frontend to a trained ML model, a course catalog database, and live labor-market datasets.
