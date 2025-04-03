
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { MoveRight, Network } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Network className="h-8 w-8 text-medical-600" />
          <div>
            <h1 className="text-xl font-bold text-medical-900">
              Cancer<span className="text-medical-500">GNN</span>
            </h1>
            <p className="text-xs text-muted-foreground">Personalized Treatment Finder</p>
          </div>
        </Link>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/" 
                className="text-medical-800 hover:text-medical-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/input" 
                className="text-medical-800 hover:text-medical-600 transition-colors"
              >
                Treatment Finder
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-medical-800 hover:text-medical-600 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        
        <Link 
          to="/input" 
          className={cn(
            "flex items-center space-x-1 text-sm",
            "bg-medical-600 hover:bg-medical-700 transition-colors",
            "text-white px-4 py-2 rounded-md"
          )}
        >
          <span>Find Treatment</span>
          <MoveRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
