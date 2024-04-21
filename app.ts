import express from 'express'
import mongoose from 'mongoose'
import { routes } from './routes'

class App {
  public express: express.Application

  public constructor() {
    this.express = express()
    this.middleware()
    this.database()
    this.routers()
  }

  public middleware(): void {
    this.express.use(express.json())
  }

  public async database() {
    try {
      mongoose.set("strictQuery", true)
      await mongoose.connect('mongodb://0.0.0.0:27017/marvel')
      console.log('Connect dabase successfully!')
    } catch (error) {
      console.log('Cannot connect to database, error: ', error)
    }
  }

  public routers(): void {
    this.express.use(routes)
  }
}

export default new App().express