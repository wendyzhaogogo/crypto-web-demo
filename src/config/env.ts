export class Env {
  private static readonly NODE_ENV = process.env.NODE_ENV || 'development'

  static getCurrentEnv(): 'development' | 'production' {
    return this.NODE_ENV as 'development' | 'production'
  }

  static isDev(): boolean {
    return this.getCurrentEnv() === 'development'
  }

  static isProd(): boolean {
    return this.getCurrentEnv() === 'production'
  }
} 