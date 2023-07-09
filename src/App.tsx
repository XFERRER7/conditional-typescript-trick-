import * as React from 'react';
import { User } from './components/User';
import { VehiclesList } from './components/VehiclesList';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Conditional Typescript</h1>

      <h3>Simple</h3>
      <User name="Maria" gender="female" weight={80} />

      <hr />

      <h3>Advanced</h3>
      <VehiclesList />
    </div>
  );
}
