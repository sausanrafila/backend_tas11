const student = require("../data/student")

class StudentController {
    index(req,res){
        const data ={
            message : "Menampilkan data student",
            data : [student],
        };
        res.json(data);
    }

    store(req,res){
        const {nama} = req.body;

        student.push(nama)
        const data ={
            message : `Menambahkan data student: ${nama}`,
            data : [student],
        };
        res.json(data);
    }

    update(req,res){
        const {id} = req.params;
        const {nama} = req.body;

        student.splice(id,1,nama)
        const data = {
            message :`Mengedit data student id ${id}, nama ${nama}`,
            data : [student]
        }
        res.json(data);
    }

    destroy(req,res){
        const {id} = req.params;
        
        student.splice(id,1)
        const data = {
            message : `Menghapus data student id ${id}`,
            data : [student],
        }
        res.json(data);
    }
}

//membuat object controller
const object = new StudentController;

//export controller
module.exports = object;