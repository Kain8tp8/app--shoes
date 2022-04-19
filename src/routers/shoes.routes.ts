import Router from "express";
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
   let bren = req.params.brand
   shoesStorage.allShoes()
 
   
})

router.post('/', (req,res)=>{
    const user: Shois = req.body
    shoesStorage.addShoes(user)
    res.send(user)
})

router.delete('/:id', (req,res)=>{
    shoesStorage.remove(req.params.id)
    res.send('Ochirldi!')
})





export default router



