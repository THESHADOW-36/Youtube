import User from "../modals/User.modal.js";
import bcrypt from "bcrypt"
import asyncHandler from "../middlewares/async.js";
import ErrorResponse from "../utils/errorResponse.js";

export const Register = asyncHandler(async (req, res, next) => {
    const { firstname, surname, day, month, year, gender, email, password } = req.body.userData;
    if (!firstname || !surname || !day || !month || !year || !gender || !email || !password) return next(new ErrorResponse("All fields are mandatory...", 401));

    const user = await User.create({ firstname, surname, day, month, year, gender, email, password })

    sendTokenResponse(user, 200, res)
})

export const Login = async (req, res) => {
    const { email, password } = req.body.userData;
    if (!email || !password) return next(new ErrorResponse("All fields are mandatory", 401));

    const user = await User.findOne({ email }).select('+password');
    if (!user) return next(new ErrorResponse(`User not found with email ${email}`, 401));

    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (!isPasswordCorrect) return res.status(404).json({ success: false, message: "Your password is incorrect" })

    const isMatch = await user.matchPassword(password);

    if (!isMatch) return next(new ErrorResponse('Invalid password', 401));

    sendTokenResponse(user, 200, res)
}

const sendTokenResponse = (user, status, res) => {
    const token = user.getJWTWebToken();

    const option = {
        expires: new Date(Date.now() + (1000 * 60 * 60 * 24 * 30)),
        httpOnly: true
    }

    if (process.env.NODE_ENV === 'production') {
        option.secure = true
    }

    return res.status(status).cookie('token', token, option).json({ success: true, token });
}

export const getCurrentUser = asyncHandler(async (req, res, next) => {

    // get the current user
    const user = await User.findById(req.user.id).select("-updatedBy -updatedAt -__v")

    if (!user) return next(new ErrorResponse('Id is not found', 401))

    res.status(200).json({ success: true, user })

});