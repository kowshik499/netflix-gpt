import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", unique: true, nullable: false })
  username!: string;

  @Column({ type: "varchar", unique: true, nullable: false })
  email!: string;

  @Column({ type: "varchar", nullable: false })
  passwordHash!: string;

  @Column({ name: "full_name", type: "varchar", nullable: false })
  fullName!: string;

  @CreateDateColumn({ name: "created_at", nullable: false })
  createdAt!: Date;

// Optional: Sequelize adds updated_at by default unless timestamps: false is set
//   @UpdateDateColumn({ name: "updated_at", nullable: false })
//   updatedAt!: Date;
}
