import React from 'react';

export const SideBar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>サイドバー</h2>
      <ul>
        <li><a href="#">リンク1</a></li>
        <li><a href="#">リンク2</a></li>
        <li><a href="#">リンク3</a></li>
      </ul>
    </div>
  );
};
