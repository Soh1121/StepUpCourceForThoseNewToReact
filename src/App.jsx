import React from 'react';
import { PrimaryButton } from './components/atom/button/PrimaryButton';
import { SecondaryButton } from './components/atom/button/SecondaryButton';

export default function App() {
    return (
        <div className="App">
            <PrimaryButton>テスト</PrimaryButton>
            <SecondaryButton>検索</SecondaryButton>
        </div>
    );
}
