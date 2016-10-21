import Todo from '../models/todo';


export const findAllTodos = (req, res) => {
  Todo.find({})
    .exec((err, todos) => {
      if (err) {
        res.json(err);
      } else {
        res.json(todos);
      }
    })
};

export const createTodo = (req, res) => {
  Todo.create(req.body, (err, doc) => {
    if (err) {
      res.json(err)
    } else {
      res.json({
        doc: doc
      })
    }
  })
};

export const upDateTodo = (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, req.body, (err, doc) => {
    if (err) {
      res.json(err);
    } else {
      res.json(doc)
    }
  })
};

export const getTodo = (req, res) => {
  Todo.findOne({ _id: req.params.id })
    .exec((err, todo) => {
      if (err) {
        res.json(err)
      } else {
        res.json(todo);
      }
    })
};

export const deleteTodo = (req, res) => {
  Todo.remove({ _id: req.params.id }, (err, doc) => {
    if (err) {
      res.json(err);
    } else {
      res.json(doc)
    }
  })
};

