import mongoose from 'mongoose';
import request from 'supertest';
import expect from 'expect';
import app from '../app';
import Todo from '../models/todo'


describe('Test todo methods', () => {
  let todoId;
  before((done) => {
    todoId = new mongoose.Types.ObjectId();

    Todo.remove().exec();
    const todo1 = new Todo({ _id: todoId, title: 'title1', description: 'Testing one description' });
    const todo2 = new Todo({ title: 'title2', description: 'Testing two description' });
    todo1.save();
    todo2.save();
    done();
  });

  it('should return all todos', (done) => {
    request(app)
      .get('/api/todos')
      .end((err, res) => {
        expect(res.body.length).toEqual(2);
        expect(err).toBeNull;
        done();
      })
  });

  it('should return a  todo by Id', (done) => {
    request(app)
      .get('/api/todos/' + todoId)
      .end((err, res) => {
        expect(res.text).toBedefined;
        expect(res.text).toContain('title1');
        expect(err).toBeNull;
        done();
      })
  });

  it('should delete a todo by Id', (done) => {
    request(app)
      .delete('/api/todos/' + todoId)
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(err).toBeNull;
        done();
      })
  });

  it('should update a todo by Id', (done) => {
    request(app)
      .put('/api/todos/' + todoId)
      .send({
        title: 'Changed title'
      })
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(err).toBeNull;
        done();
      })
  });
  
  it('should create a todo', (done) => {
    request(app)
      .post('/api/todos/')
      .send({
        title: 'new todo',
        description: 'New todo list'
      })
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(err).toBeNull;
        done();
      })
  });
});

