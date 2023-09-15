import { Parseable, ValidateProperty } from "parzival";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@Parseable()
export class User {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({
		unique: true,
		type: "varchar",
	})
	@ValidateProperty({
		minLength: 3,
		maxLength: 16,
		type: "string",
	})
	username!: string;

	@Column({
		type: "varchar",
		unique: true,
	})
	@ValidateProperty({
		type: "string",
		match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
	})
	email!: string;

	/* Bad Practice! using passwords unencrypted */
	/* Please only use in non-production scenarios */
	@Column({
		type: "varchar",
	})
	@ValidateProperty({
		type: "string",
		minLength: 8,
		maxLength: 32,
	})
	password!: string;
}