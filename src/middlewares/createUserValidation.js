const initialValidations = (req, res, next) => {
  req.errors = []
  next()
}

const validateId = (req, res, next) => {
  const{ id } = req.body
  if (!id)  req.errors.push('Missing property: id')
    console.log('hay id?', id);
  next()
}

const validateEmail = (req, res, next) => {
  const{ email } = req.body
  if (!email) req.errors.push('Missing property: email')
  next()
}

const validateAge = (req, res, next) => {
  const{ age } = req.body
  if (!age) req.errors.push('Missing property: age')
  if (age && age < 18 ) req.errors.push('Age should be of age(>17)')
  next()
}

const validateErrors = (req, res, next) => {
  if (req.errors.length) {
    return res.status(400).json({
      success: false,
      data: req.errors
    })
  }
  next()
}

export default [ initialValidations,validateId, validateAge, validateEmail,validateErrors ]
