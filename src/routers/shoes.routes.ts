import Router from "express";
import { nanoid } from "nanoid";
import Shois from "../model/shoes.model";
import shoesStorage from "../storage/shoes.storage";


const router = Router()


router.get('/', (req,res)=>{
   let result = shoesStorage.allShoes()
   res.json({
       message:'all shoes ',
       shoes: result
   })
})


router.get('/:brand', (req,res)=>{
   let brand = req.params.brand
   let result = shoesStorage.findByBrend(brand)
 
   res.json({
       message: `${brand} boycha oyoq kiyimlar`,
       shoes: result
   })
})

router.post('/', (req,res)=>{

    let user: Shois = {
        id: nanoid(),
        colore: req.body.colore,
        brend: req.body.brend,
        size: req.body.size,
        moterial: req.body.moterial,
        name: req.body.name,
        price: req.body.price
    }

    shoesStorage.addShoes(user)
    res.send({
        message: 'Ko`vis koshildi',
        shoes:user
    })
})

router.delete('/:id', (req,res)=>{
    let id = req.params.id
    shoesStorage.remove(id)
    res.json({
       message: 'Bu ellement endi yoq.'
    })
})

export default router



