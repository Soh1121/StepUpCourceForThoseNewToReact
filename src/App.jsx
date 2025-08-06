import React from 'react';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import "./styles.css"
import { BrowserRouter } from 'react-router-dom';
import { DefaultLayout } from './components/templates/DefaultLayout';

const user = {
    name: "Soh",
    image: "https://images.unsplash.com/photo-1737309625096-4c470d65b484?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "12345@example.com",
    phone: "090-0000-0000",
    company: {
        name: "テスト株式会社"
    },
    website: "https://google.com"
}

export default function App() {
    return (
        <BrowserRouter>
            <DefaultLayout>
                <PrimaryButton>テスト</PrimaryButton>
                <SecondaryButton>検索</SecondaryButton>
                <br />
                <SearchInput />
                <UserCard user={user} />
            </DefaultLayout>
        </BrowserRouter>
    );
}
