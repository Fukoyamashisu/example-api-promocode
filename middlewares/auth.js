const isAuthorize = (req, res, next) => {
  const { headers: { authorization } } = req;

  if (authorization && authorization.split(' ')[0] === 'Bearer' && authorization.split(' ')[1] === 'api') {
    next();
  }
  res.status(401).json({
    status: false,
  });
};

export default isAuthorize;
