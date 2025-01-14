import { Request, Response } from 'express';
import Job from '../models/Job';

export const JobController = {
  async create(req: Request, res: Response) {
    console.log('Attempting to create job');
    try {
      const job = await Job.create(req.body);
    //   console.log('Job created successfully:', job.toJSON());
      return res.status(201).json(job);
    } catch (error : any) {
      console.error('Error creating job:', error, 'Request body:', req.body);
      return res.status(500).json({ error: 'Failed to create job', details: error.message });
    }
  },

  async findAll(req: Request, res: Response) {
    console.log('Fetching all jobs');
    try {
      const jobs = await Job.findAll();
      console.log(`Found ${jobs.length} jobs`);
      return res.json(jobs);
    } catch (error : any) {
      console.error('Error fetching jobs:', error);
      return res.status(500).json({ error: 'Failed to fetch jobs', details: error.message });
    }
  },

  async findById(req: Request, res: Response) {
    console.log('Fetching job by ID:', req.params.id);
    try {
      const job = await Job.findByPk(req.params.id);
      if (!job) {
        console.log('Job not found:', req.params.id);
        return res.status(404).json({ error: 'Job not found' });
      }
    //   console.log('Job found:', job.toJSON());
      return res.json(job);
    } catch (error : any) {
      console.error('Error fetching job:', error, 'Job ID:', req.params.id);
      return res.status(500).json({ error: 'Failed to fetch job', details: error.message });
    }
  },

  async update(req: Request, res: Response) {
    console.log('Attempting to update job:', req.params.id);
    try {
      const job = await Job.findByPk(req.params.id);
      if (!job) {
        console.log('Job not found for update:', req.params.id);
        return res.status(404).json({ error: 'Job not found' });
      }
      await job.update(req.body);
    //   console.log('Job updated successfully:', job.toJSON());
      return res.json(job);
    } catch (error : any) {
      console.error('Error updating job:', error, 'Job ID:', req.params.id, 'Request body:', req.body);
      return res.status(500).json({ error: 'Failed to update job', details: error.message });
    }
  },

  async delete(req: Request, res: Response) {
    console.log('Attempting to delete job:', req.params.id);
    try {
      const job = await Job.findByPk(req.params.id);
      if (!job) {
        console.log('Job not found for deletion:', req.params.id);
        return res.status(404).json({ error: 'Job not found' });
      }
      await job.destroy();
      console.log('Job deleted successfully:', req.params.id);
      return res.json({ message: 'Job deleted successfully' });
    } catch (error : any) {
      console.error('Error deleting job:', error, 'Job ID:', req.params.id);
      return res.status(500).json({ error: 'Failed to delete job', details: error.message });
    }
  }
};

