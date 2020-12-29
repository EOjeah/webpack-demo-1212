import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/server/index';

chai.use(chaiHttp);
chai.should();

// eslint-disable-next-line no-undef
describe('Return code 200', () => {
  // eslint-disable-next-line no-undef
  it('should return 200', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
