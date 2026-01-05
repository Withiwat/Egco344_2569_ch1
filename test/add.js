const express = require('express');
const { fileURLToPath } = require('node:url');

const app = express();
const PORT = 3000;

// Mock student data
const students = [
    { id: 'E001', name: 'Somchai', department: 'Computer Engineering', gpa: 3.8 },
    { id: 'E002', name: 'Niran', department: 'Computer Engineering', gpa: 3.5 },
    { id: 'E003', name: 'Pattana', department: 'Electrical Engineering', gpa: 3.9 },
    { id: 'E004', name: 'Sarita', department: 'Electrical Engineering', gpa: 3.6 },
    { id: 'E005', name: 'Chaiyot', department: 'Civil Engineering', gpa: 3.7 },
    { id: 'E006', name: 'Prapai', department: 'Civil Engineering', gpa: 3.4 },
    { id: 'E007', name: 'Suwit', department: 'Mechanical Engineering', gpa: 3.8 },
    { id: 'E008', name: 'Duangchai', department: 'Mechanical Engineering', gpa: 3.5 }
];

app.use(express.json());

// API 1: Get all students GPA from all departments
app.get('/api/students/gpa', (req, res) => {
    const result = students.map(({ id, name, department, gpa }) => ({
        id,
        name,
        department,
        gpa
    }));
    res.json({
        success: true,
        data: result,
        total: result.length
    });
});

// API 2: Query individual student GPA by student ID
app.get('/api/students/gpa/:studentId', (req, res) => {
    const student = students.find(s => s.id === req.params.studentId);
    
    if (!student) {
        return res.status(404).json({
            success: false,
            message: `Student with ID ${req.params.studentId} not found`
        });
    }

    res.json({
        success: true,
        data: {
            id: student.id,
            name: student.name,
            department: student.department,
            gpa: student.gpa
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`API endpoints:`);
    console.log(`- GET http://localhost:${PORT}/api/students/gpa`);
    console.log(`- GET http://localhost:${PORT}/api/students/gpa/:studentId`);
});


/*******************************************
 * 
 * 
 *
 * type: 
 *  npm install express 
 * before running this file
 * then run:
 * node add.js 
 * 
 * /git ignore\
 * touch .gitignore
 * 
 * Rule	        Meaning	                                          Example Use
 * filename.txt	Ignures a specific file.	                      secrets.txt
 * *.ext	    Ignures ALL files with this extension.            *.log (Ignores all log files)
 * folder/	    Ignures an entire folder and everything in it.    node_modules/
      #	Lines starting with # are comments.	# Ignore dependency folders
 * 
 * 
 * *******************************************/
 