import Post from ".../models/posts.js";

export const getPost =async (req,res) =>{
    try{
        const posts = await Post.find();
        res.status(200).json(posts)
    } catch (error){
res.status(404).json({
    message: error.message,
});
    }
};

//veritabanındaki bütün postları getirip döndürüyor ve hata olursa hata mesajını döndürüyor