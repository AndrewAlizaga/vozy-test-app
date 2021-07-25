const doc = 'https://documenter.getpostman.com/view/3678249/TzsZs8gL'

//Create account
const documentation = async (req, res) => {
    console.log('authenticate controller')

    try {
        //Provide documentation
        return res.status(200).redirect(doc)
        
    } catch (error) {
        //Server error catch
        console.log(error);
        return res.status(503).json({ 'errorMessage': error });
    }

}

module.exports = documentation