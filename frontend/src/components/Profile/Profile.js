import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const { data } = await axios.get(`/api/auth/profile/${id}`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
                });
                setProfile(data);
            } catch (error) {
                console.error('Error fetching profile', error);
            }
        };

        fetchProfile();
    }, [id]);

    return (
        <div>
            <h2>{profile.username}</h2>
            <p>{profile.email}</p>
            {profile.profilePic && <img src={profile.profilePic} alt="profile" />}
        </div>
    );
};

export default Profile;
