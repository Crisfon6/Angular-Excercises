const Employee = require('../models/employee.model')

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req,res)=>{
    const employee = await Employee.find();
    res.json(employee);
}
employeeCtrl.createEmployee = async (req,res)=>{
    const employee = new Employee({
        name: req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary
    });
    await employee.save()
        .then(()=>{
            res.json({status:
                "Employee saved"
            });
        })
        .catch(err =>{
            console.log(err);
            
        })
    console.log(employee);
    
   
    
}
employeeCtrl.getEmployee = async (req,res)=>{
    const employee = await Employee.findById(req.params.id)
    res.send(employee)
}
employeeCtrl.updateEmployee = async (req,res)=>{ 
    const {id} = req.params;
    const  employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    // El new true hace que si no existe el dato lo cree 
    await Employee.findByIdAndUpdate(id, {$set: employee},{new : true});
    res.json({status: "employee uupdated"})
}
employeeCtrl.deleteEmployee = async (req,res)=>{
    await Employee.findByIdAndRemove(req.params.id);
    res.json({
        status: "Employeed Deleted"
    })
}
module.exports = employeeCtrl;