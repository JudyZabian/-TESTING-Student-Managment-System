const knex = require("./knex")

function creatStudent(student) {
    return knex ("students").insert(student)
}

function getAllStudents() {
    return knex ("students").select("*")
}

function deleteStudent(id) {
    return knex ("students").where("id",id).del()
}

function updateStudent(id,student) {
    return knex ("students").where("id",id).update(student)
}

module.exports = {
    creatStudent,
    getAllStudents,
    deleteStudent,
    updateStudent
}