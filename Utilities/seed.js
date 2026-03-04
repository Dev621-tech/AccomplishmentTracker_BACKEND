// Imported Libraries
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Imported Models
import User from '../Models/userSchema.js';
import Accomplishment from '../Models/accomplishmentSchema.js';
import Post from '../Models/postSchema.js';

// Imported Data
import userData from './userData.js';
import accomplishmentData from './accomplishmentData.js';
import postData from './postData.js';

// Setups
dotenv.config();
const connectionString = process.env.MONGO_URI || "";

// Seeding Function
async function seedDatabase() {
    
    try {
        console.log(`🏁 Starting Seed`)
        await mongoose.connect(connectionString);
        console.log(`✅ Connected To DB`);

        await User.deleteMany({});
        await Accomplishment.deleteMany({});
        await Post.deleteMany({});
        console.log(`✅ Deleted Previous Data`)

        const seededeUsers = await User.create(userData);
        console.log(`✅ Seeded Users`);

        const userIdMap = {};

        seededeUsers.forEach(user => {
            userIdMap[user.username] = user._id;
        })

        const accomplishmentsWithUserIds = accomplishmentData.map(accomplishment => ({
            userId: userIdMap[accomplishment.username],
            ...accomplishment
        }));

        await Accomplishment.insertMany(accomplishmentsWithUserIds);
        console.log(`✅ Seeded Accomplishments`);

        const postWithUserIds = postData.map(post => ({
            userId: userIdMap[post.username],
            ...post
        }));

        await Post.insertMany(postWithUserIds);
        console.log(`✅ Seeded Posts`);

        console.log(`🎊 Successfully Seeded`)
        process.exit(0);

    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

seedDatabase();