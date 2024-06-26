import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffe = () => {
    const seecofee = useLoaderData();
    const { _id, name, chef, supplier, test, catagorey, details, photo } = seecofee;
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const catagorey = form.catagorey.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatecoffe = { name, chef, supplier, test, catagorey, details, photo };
        console.log(updatecoffe);
        fetch(`http://localhost:5000/coffe/${_id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(updatecoffe)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Sucess ',
                        text: 'New Cofee updated sucessfully ',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset(" ");
                }
            })
    }
    return (
        <div>
            <h3>update coffe name:{seecofee.name} </h3>

            <div className="bg-pink-100">
                <div>
                    <h3 className="text-center text-4xl"> Update Coffe </h3>
                    <p className="text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
                </div>
                <div className="p-14">
                    <form onSubmit={handleUpdate} >
                        {/* first input */}
                        <div className=" md:flex">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold ">Name</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" defaultValue={name} name="name" placeholder="Enter Coffe Name" className=" w-full input input-bordered" />
                                </label>
                            </div>
                            <div className="form-control w-1/2 md:ml-3">
                                <label className="label">
                                    <span className="label-text font-bold">Quantity</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" defaultValue={chef} name="chef" placeholder="Enter Quantity" className=" w-full input input-bordered" />
                                </label>
                            </div>
                        </div>
                        {/* Second  input row  */}
                        <div className=" md:flex">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold ">Supplier</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" defaultValue={supplier} name="supplier" placeholder="Enter Coffe Supplier" className=" w-full input input-bordered" />
                                </label>
                            </div>
                            <div className="form-control w-1/2 md:ml-3">
                                <label className="label">
                                    <span className="label-text font-bold">Test</span>
                                </label>
                                <label className="input-group">

                                    <input defaultValue={test} type="text" name="test" placeholder="Enter Coffe Test" className=" w-full input input-bordered" />
                                </label>
                            </div>
                        </div>
                        {/* Third  input row  */}
                        <div className=" md:flex">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold ">Catagorey</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" defaultValue={catagorey} name="catagorey" placeholder="Enter Coffe Catagorey" className=" w-full input input-bordered" />
                                </label>
                            </div>
                            <div className="form-control w-1/2 md:ml-3">
                                <label className="label">
                                    <span className="label-text font-bold">Details</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" defaultValue={details} name="details" placeholder="Enter Coffe Details" className=" w-full input input-bordered" />
                                </label>
                            </div>

                        </div>
                        {/* phot url */}
                        <div className="mb-8">
                            <div className="form-control w-full md:ml-3">
                                <label className="label">
                                    <span className="label-text font-bold">Photo</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" defaultValue={photo} name="photo" placeholder="photo url" className=" w-full input input-bordered" />
                                </label>
                            </div>
                        </div>
                        <button className=" bg-orange-400 mt-4 btn btn-block" type="submit">Add Coffe</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default UpdateCoffe;