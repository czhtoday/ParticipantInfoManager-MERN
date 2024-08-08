import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../server.js';

jest.setTimeout(30000);

describe('Participant API', () => {
  beforeAll(async () => {
    const url = 'mongodb://127.0.0.1/test-database';
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  });

  let participantId;

  it('should create a new participant', async () => {
    const newParticipant = {
      firstname: 'John',
      lastname: 'Doe',
      dateofbirth: '1990-01-01',
      gender: 'Male',
      race: 'Caucasian',
      livingLocation: { state: 'California', city: 'Los Angeles' },
      workingLocation: { state: 'California', city: 'San Francisco' },
      housingStatus: 'Owned',
      educationLevel: 'Bachelor',
      healthInsurance: true,
      dentalInsurance: true,
      visionInsurance: true,
      militaryOrVeteran: false,
      orientationStatus: 'Completed',
      jobPlacement: { jobTitle: 'Engineer', startDate: '2022-01-01', endDate: '2023-01-01' }
    };

    const response = await request(app)
      .post('/api/participants')
      .send(newParticipant)
      .expect('Content-Type', /json/)
      .expect(201);

    participantId = response.body._id;

    const newParticipantWithFormattedDate = {
      ...newParticipant,
      dateofbirth: '1990-01-01T00:00:00.000Z',
      jobPlacement: {
        ...newParticipant.jobPlacement,
        startDate: '2022-01-01T00:00:00.000Z',
        endDate: '2023-01-01T00:00:00.000Z',
      }
    };

    expect(response.body).toMatchObject(newParticipantWithFormattedDate);
  });

  it('should get all participants', async () => {
    const response = await request(app)
      .get('/api/participants')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should get a single participant', async () => {
    const response = await request(app)
      .get(`/api/participants/${participantId}`)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body._id).toBe(participantId);
  });

  it('should update a participant', async () => {
    const updatedData = { firstname: 'Jane' };

    const response = await request(app)
      .put(`/api/participants/${participantId}`)
      .send(updatedData)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.firstname).toBe('Jane');
  });

  it('should delete a participant', async () => {
    await request(app)
      .delete(`/api/participants/${participantId}`)
      .expect(204);

    const response = await request(app)
      .get(`/api/participants/${participantId}`)
      .expect(404);

    expect(response.body.message).toBe('Participant not found');
  });
});
