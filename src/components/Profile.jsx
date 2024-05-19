import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useCalories } from '../components/CalorieContext';

const Profile = () => {
    const [user, setUser] = useState(null);
    const { proteinTarget, fatTarget } = useCalories();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            setUser(userData);
        }
    }, []);

    return (
        <ProfileContainer>
            <Card>
                <Circle className="circle1"></Circle>
                <Circle className="circle2"></Circle>
                <CardInner>
                    <ProfileHeader>
                        <h2>Profile</h2>
                    </ProfileHeader>
                    <ProfileInfo>
                        <InfoRow>
                            <InfoLabel>Username:</InfoLabel>
                            <InfoValue>{user?.username}</InfoValue>
                        </InfoRow>
                        <InfoRow>
                            <InfoLabel>Email:</InfoLabel>
                            <InfoValue>{user?.email}</InfoValue>
                        </InfoRow>
                        <InfoRow>
                            <InfoLabel>Weight:</InfoLabel>
                            <InfoValue>{user?.weight} kg</InfoValue>
                        </InfoRow>
                        <InfoRow>
                            <InfoLabel>Dietary Goal:</InfoLabel>
                            <InfoValue>{user?.dietaryGoal}</InfoValue>
                        </InfoRow>
                        <InfoRow>
                            <InfoLabel>Protein Target:</InfoLabel>
                            <InfoValue>{proteinTarget.toFixed(2)} g</InfoValue>
                        </InfoRow>
                        <InfoRow>
                            <InfoLabel>Fat Target:</InfoLabel>
                            <InfoValue>{fatTarget.toFixed(2)} g</InfoValue>
                        </InfoRow>
                    </ProfileInfo>
                </CardInner>
            </Card>
        </ProfileContainer>
    );
};

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
`;

const Card = styled.div`
  width: 300px; /* Adjusted width to fit more content */
  height: 400px; /* Adjusted height to fit more content */
  transition: all 0.2s;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: scale(1.4) rotate(4deg);
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background: radial-gradient(#b0e633, #53ef7d);
  border-radius: 50%;
  position: absolute;
  animation: move-up6 2s ease-in infinite alternate-reverse;

  &.circle1 {
    top: -25px;
    left: -25px;
  }

  &.circle2 {
    bottom: -25px;
    right: -25px;
    animation-name: move-down1;
  }

  @keyframes move-up6 {
    to {
      transform: translateY(-10px);
    }
  }

  @keyframes move-down1 {
    to {
      transform: translateY(10px);
    }
  }
`;

const CardInner = styled.div`
  width: inherit;
  height: inherit;
  background: rgba(255, 255, 255, 0.85); /* Increased opacity for better contrast */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 20px; /* Added padding for better content layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileHeader = styled.div`
  margin-bottom: 1.5rem;
  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
    text-align: center;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

const InfoLabel = styled.div`
  font-weight: bold;
  color: #666;
`;

const InfoValue = styled.div`
  color: #333;
`;

export default Profile;
