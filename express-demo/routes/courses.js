const express = require('express');
const router = express.Router();

const courses = [
    {id: 1, name: 'Backend Development'},
    {id: 2, name: 'Frontend Development'},
    {id: 3, name: 'Fullstack Development'}
];

// geting all resource
router.get('/', (req, res) => {
    res.send(courses);
});

// route parameters geting single resource
router.get('/:id', (req, res) => {
    const course = courses.find( (course) => course.id === parseInt(req.params.id)); 
    if(!course) return  res.status(404).send(`Course with id: ${req.params.id} does not exist`)
    
    res.send(course);
});

// creating a new resource
router.post('/', (req, res) => {

    const { error } = validateCourse(req.body);

    if(error) return res.status(400).send(error.details[0].message);
     

  const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});

// Updating a resource
router.put('/:id', (req, res) => {
    const course = courses.find( (course) => course.id === parseInt(req.params.id)); 
    if(!course) return res.status(404).send(`Course with id: ${req.params.id} does not exist`)
    
    const { error } = validateCourse(req.body);

   if(error) return res.status(400).send(error.details[0].message);
   
   // update course
   course.name = req.body.name
   // return the course
   res.send(course);
});

// Deleting a resource

router.delete('/:id', (req, res) => {
    const course = courses.find((course) => course.id === parseInt(req.params.id)); 
    if(!course) return res.status(404).send(`Course with id: ${req.params.id} does not exist`)

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
})

// create a validation method
function validateCourse(course) {
    const schema = {
        name: Joi.string().min(2).required()
    }

    return Joi.validate(course, schema);
}

module.exports = router;
