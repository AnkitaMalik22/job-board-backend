import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Job extends Model {
  public id!: number;
  public title!: string;
  public company!: string;
  public location!: string;
  public salary!: number;
  public description!: string;
}

Job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    salary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'Job',
    tableName: 'jobs'
  }
);

export default Job;