import { useForm } from "react-hook-form";
import { faker } from '@faker-js/faker';

const Form = ({ onAdd }) => {

    const { register, handleSubmit, formState: { errors }, setValue, control } = useForm({
        defaultValues: {
            name: faker.name.fullName(),
            email: faker.internet.email(),
            birthDate: new Date().toISOString().split('T')[0],
            sallary: faker.datatype.number(),
        }
    });

    const onSubmit = data => {
        const id = faker.datatype.uuid();
        const user = { id, ...data }

        onAdd(user);

        //Update inputes values by fakerJS library after adding a user
        setValue('name', faker.name.fullName())
        setValue('email', faker.internet.email())
        setValue('sallary', faker.datatype.number())

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container">

                <div className="form-group">
                    <label>Name</label>
                    <input {...register("name", { required: true })} />
                    {errors.fullName && <span>This field is required</span>}
                </div>

                <div className="form-group">
                    <label>Birth Date</label>
                    <input type='date' {...register("birthDate", { required: true })} />
                    {errors.birthDate && <span>This field is required</span>}
                </div>

                <div className="form-group">
                    <label>Sallary</label>
                    <input {...register("sallary", { required: true })} />
                    {errors.sallary && <span>This field is required</span>}
                </div>
                
                <div className="form-group">
                    <label>Email</label>
                    <input {...register("email", { required: true })} />
                    {errors.email && <span>This field is required</span>}
                </div>

            </div>
            <input type="submit" value='Add' />
        </form>
    )
}

export default Form