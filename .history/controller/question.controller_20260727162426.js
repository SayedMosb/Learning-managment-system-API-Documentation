const Question = require('../moduels/Question.moduel');

const addQuestin = async(req,res)=>{
    try{
          const{question,options,correctAnswer,Quiz}=req.body;
          if(!question || !options ||!correctAnswer||!Quiz){
            return res.status(400).json({msg:'all fields are required'});
          }
             if (!Array.isArray(options) || options.length === 0) {
            return res.status(400).json({
                msg: 'Options must be a non-empty array'
            });
        }
          const newData = await Question.create({
        question,
        options,
        correctAnswer,
        Quiz
          });
          
          return res.status(201).json({msg:'question added successful',data:newData});
    }catch(err){
        return res.status(500).json({msg:err.message});
    }

}

