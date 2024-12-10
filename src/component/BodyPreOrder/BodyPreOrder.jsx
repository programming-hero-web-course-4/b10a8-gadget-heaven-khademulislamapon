
const BodyPreOrder = () => {
    return (
        <div className="pb-24 mt-12 w-2/5 mx-auto space-y-5">
            <div>
                <h4 className="text-xl mb-2">Product Information</h4>
                <input type="text" name="" id="" placeholder="Enter Product Name/URL" className="w-full py-3 px-6 bg-white placeholder:text-xl text-xl rounded-xl" />
            </div>

            <div>
                <h4 className="text-xl mb-2">Insert Image</h4>
                <input type="file" className="file-input file-input-bordered w-full max-w-xs " />
            </div>

            <div>
                <h4 className="text-xl mb-2">Name</h4>
                <input type="text" name="" id="" placeholder="Enter Name" className="w-full py-3 px-6 bg-white placeholder:text-xl text-xl rounded-xl" />
            </div>

            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl mb-2">Phone</h2>
                    <input type="number" name="" id="" placeholder="Enter Phone No" className="w-full py-3 px-6 bg-white placeholder:text-xl text-xl rounded-xl" />
                </div>
                <div>
                    <h2 className="text-xl mb-2">Email</h2>
                    <input type="email" name="" id="" placeholder="Enter Email Address" className="w-full py-3 px-6 bg-white placeholder:text-xl text-xl rounded-xl" />
                </div>
            </div>

            <div>
                <h2 className="text-xl mb-2">Address</h2>
                <textarea name="" id="" cols="" rows="5" placeholder="Enter Address" className="w-full py-3 px-6 bg-white placeholder:text-xl text-xl rounded-xl" />
            </div>

            <div className="space-x-2">
                <input type="checkbox" name="termsAndConditions" id="termsAndConditions" />
                <label htmlFor="termsAndConditions" className="text-sm">I hereby accept the terms and conditions of pre-order and read the pre-order terms and conditions carefully.</label>
            </div>

            <input type="Submit" value="Submit" className="py-3 px-5 font-semibold text-lg text-[#9538E2] border-2 border-[#9538E2] rounded-xl hover:bg-[#9538E2] hover:text-white hover:font-bold" />
        </div>
    );
};

export default BodyPreOrder;