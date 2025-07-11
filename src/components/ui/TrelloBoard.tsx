import React, { useState } from 'react';
import { Plus, X, Trash2 } from 'lucide-react';

// TypeScript interfaces
interface Card {
  id: string;
  content: string;
}

interface Column {
  id: string;
  title: string;
  cards: Card[];
}

interface DraggedCard extends Card {
  sourceColumnId: string;
}

const TrelloBoard: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>([
    {
      id: 'todo',
      title: 'To Do',
      cards: [
        { id: '1', content: 'Thiết kế giao diện' },
        { id: '2', content: 'Viết API backend' },
        { id: '3', content: 'Tạo database schema' }
      ]
    },
    {
      id: 'doing',
      title: 'Doing',
      cards: [
        { id: '4', content: 'Implement authentication' },
        { id: '5', content: 'Setup CI/CD pipeline' }
      ]
    },
    {
      id: 'done',
      title: 'Done',
      cards: [
        { id: '6', content: 'Project setup' },
        { id: '7', content: 'Choose tech stack' }
      ]
    }
  ]);

  const [draggedCard, setDraggedCard] = useState<DraggedCard | null>(null);
  const [draggedOverColumn, setDraggedOverColumn] = useState<string | null>(null);
  const [newCardContent, setNewCardContent] = useState<string>('');
  const [showAddCard, setShowAddCard] = useState<string | null>(null);
  const [newColumnTitle, setNewColumnTitle] = useState<string>('');
  const [showAddColumn, setShowAddColumn] = useState<boolean>(false);
  const [editingColumnId, setEditingColumnId] = useState<string | null>(null);
  const [editingColumnTitle, setEditingColumnTitle] = useState<string>('');

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, card: Card, columnId: string): void => {
    setDraggedCard({ ...card, sourceColumnId: columnId });
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>, columnId: string): void => {
    e.preventDefault();
    setDraggedOverColumn(columnId);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>): void => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setDraggedOverColumn(null);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetColumnId: string): void => {
    e.preventDefault();
    setDraggedOverColumn(null);
    
    if (!draggedCard || draggedCard.sourceColumnId === targetColumnId) {
      setDraggedCard(null);
      return;
    }

    setColumns(prevColumns => {
      const newColumns = [...prevColumns];
      
      // Remove card from source column
      const sourceColumn = newColumns.find(col => col.id === draggedCard.sourceColumnId);
      if (sourceColumn) {
        sourceColumn.cards = sourceColumn.cards.filter(card => card.id !== draggedCard.id);
      }
      
      // Add card to target column
      const targetColumn = newColumns.find(col => col.id === targetColumnId);
      if (targetColumn) {
        targetColumn.cards.push({ id: draggedCard.id, content: draggedCard.content });
      }
      
      return newColumns;
    });
    
    setDraggedCard(null);
  };

  const addCard = (columnId: string): void => {
    if (!newCardContent.trim()) return;
    
    setColumns(prevColumns => {
      const newColumns = [...prevColumns];
      const column = newColumns.find(col => col.id === columnId);
      if (column) {
        const newCard: Card = {
          id: Date.now().toString(),
          content: newCardContent
        };
        column.cards.push(newCard);
      }
      return newColumns;
    });
    
    setNewCardContent('');
    setShowAddCard(null);
  };

  const addColumn = (): void => {
    if (!newColumnTitle.trim()) return;
    
    const newColumn: Column = {
      id: Date.now().toString(),
      title: newColumnTitle,
      cards: []
    };
    
    setColumns(prevColumns => [...prevColumns, newColumn]);
    setNewColumnTitle('');
    setShowAddColumn(false);
  };

  const deleteColumn = (columnId: string): void => {
    setColumns(prevColumns => prevColumns.filter(col => col.id !== columnId));
  };

  const deleteCard = (cardId: string, columnId: string): void => {
    setColumns(prevColumns => {
      const newColumns = [...prevColumns];
      const column = newColumns.find(col => col.id === columnId);
      if (column) {
        column.cards = column.cards.filter(card => card.id !== cardId);
      }
      return newColumns;
    });
  };

  // Column title editing functions
  const startEditingTitle = (columnId: string, currentTitle: string): void => {
    setEditingColumnId(columnId);
    setEditingColumnTitle(currentTitle);
  };

  const saveColumnTitle = (columnId: string): void => {
    if (!editingColumnTitle.trim()) {
      cancelEditingTitle();
      return;
    }

    setColumns(prevColumns => {
      const newColumns = [...prevColumns];
      const column = newColumns.find(col => col.id === columnId);
      if (column) {
        column.title = editingColumnTitle.trim();
      }
      return newColumns;
    });

    setEditingColumnId(null);
    setEditingColumnTitle('');
  };

  const cancelEditingTitle = (): void => {
    setEditingColumnId(null);
    setEditingColumnTitle('');
  };

  const handleTitleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, columnId: string): void => {
    if (e.key === 'Enter') {
      saveColumnTitle(columnId);
    } else if (e.key === 'Escape') {
      cancelEditingTitle();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section with Gradient Background */}
      <div className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16 text-center">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">
            Trello-style Board
          </h1>
          <p className="text-xl opacity-90 animate-fade-in animation-delay-200 max-w-2xl mx-auto">
            Interactive drag & drop task management with smooth animations
          </p>
        </div>
      </div>

      {/* Main Board Section */}
      <div className="p-20">
        <div className="max-w-7xl mx-auto ">
          <div className="flex gap-6 overflow-x-auto p-6">
            {columns.map((column, columnIndex) => (
              <div
                key={column.id}
                className={`bg-white rounded-2xl p-6 min-w-80 shadow-lg transition-all duration-300 group border border-gray-100 hover:shadow-2xl hover:transform hover:-translate-y-1 animate-fade-in z-10 ${
                  draggedOverColumn === column.id 
                    ? 'bg-gradient-to-br from-primary-50 to-secondary-50 ring-2 ring-primary-400 shadow-xl transform -translate-y-1' 
                    : ''
                }`}
                style={{ animationDelay: `${columnIndex * 100}ms` }}
                onDragOver={handleDragOver}
                onDragEnter={(e) => handleDragEnter(e, column.id)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, column.id)}
              >
                <div className="flex items-center justify-between mb-6">
                  {editingColumnId === column.id ? (
                    <input
                      type="text"
                      value={editingColumnTitle}
                      onChange={(e) => setEditingColumnTitle(e.target.value)}
                      onBlur={() => saveColumnTitle(column.id)}
                      onKeyDown={(e) => handleTitleKeyPress(e, column.id)}
                      className="font-bold text-gray-800 text-xl bg-transparent border-2 border-primary-300 rounded-lg px-2 py-1 focus:outline-none focus:border-primary-500 focus:bg-white transition-all duration-300"
                      autoFocus
                    />
                  ) : (
                    <h2 
                      className="font-bold text-gray-800 text-xl flex items-center gap-2 cursor-pointer hover:text-primary-600 transition-colors duration-300 px-2 py-1 rounded-lg hover:bg-primary-50"
                      onClick={() => startEditingTitle(column.id, column.title)}
                      title="Click to edit title"
                    >
                      {column.title}
                    </h2>
                  )}
                  <div className="flex items-center gap-3">
                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
                      {column.cards.length}
                    </span>
                    <button
                      onClick={() => deleteColumn(column.id)}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 hover:transform hover:scale-110"
                      title="Xóa cột"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {column.cards.map((card, cardIndex) => (
                    <div
                      key={card.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, card, column.id)}
                      className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 cursor-move hover:shadow-md transition-all duration-300 group backdrop-blur-sm hover:transform hover:-translate-y-1 hover:border-primary-200"
                      style={{ animationDelay: `${(columnIndex * 100) + (cardIndex * 50)}ms` }}
                    >
                      <div className="flex items-start justify-between">
                        <p className="text-gray-800 flex-1 leading-relaxed">{card.content}</p>
                        <button
                          onClick={() => deleteCard(card.id, column.id)}
                          className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 hover:text-red-700 ml-3 p-1 rounded-full hover:bg-red-50 hover:transform hover:scale-110"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {showAddCard === column.id ? (
                  <div className="mt-4 space-y-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <textarea
                      value={newCardContent}
                      onChange={(e) => setNewCardContent(e.target.value)}
                      placeholder="Nhập nội dung card..."
                      className="w-full p-3 border-2 border-gray-200 rounded-lg resize-none transition-all duration-300 focus:outline-none focus:border-primary-500 focus:shadow-lg focus:shadow-primary-100"
                      rows={3}
                      autoFocus
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => addCard(column.id)}
                        className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl"
                      >
                        Thêm Card
                      </button>
                      <button
                        onClick={() => {
                          setShowAddCard(null);
                          setNewCardContent('');
                        }}
                        className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 hover:transform hover:-translate-y-1"
                      >
                        Hủy
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowAddCard(column.id)}
                    className="w-full mt-4 p-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                  >
                    <Plus size={20} />
                    Thêm card
                  </button>
                )}
              </div>
            ))}
            
            {/* Add Column Button */}
            {showAddColumn ? (
              <div className="bg-white rounded-2xl p-6 min-w-80 shadow-lg border border-gray-100 animate-fade-in">
                <div className="space-y-4">
                  <input
                    type="text"
                    value={newColumnTitle}
                    onChange={(e) => setNewColumnTitle(e.target.value)}
                    placeholder="Nhập tên cột..."
                    className="w-full p-3 border-2 border-gray-200 rounded-lg transition-all duration-300 focus:outline-none focus:border-primary-500 focus:shadow-lg focus:shadow-primary-100"
                    autoFocus
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={addColumn}
                      className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl"
                    >
                      Thêm Cột
                    </button>
                    <button
                      onClick={() => {
                        setShowAddColumn(false);
                        setNewColumnTitle('');
                      }}
                      className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 hover:transform hover:-translate-y-1"
                    >
                      Hủy
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowAddColumn(true)}
                className="bg-white/50 hover:bg-white border-2 border-dashed border-gray-300 hover:border-primary-400 rounded-2xl p-6 min-w-80 transition-all duration-300 flex items-center justify-center gap-3 text-gray-500 hover:text-primary-600 font-medium hover:shadow-lg hover:transform hover:-translate-y-1 backdrop-blur-sm"
              >
                <Plus size={24} />
                Thêm cột mới
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-3">
              <span className="text-4xl">📋</span>
              Hướng dẫn sử dụng
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-primary-50 hover:transform hover:translate-x-2">
                <div className="min-w-[40px] h-10 flex items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full text-white text-xl">
                  🖱️
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Kéo thả card</h4>
                  <p className="text-gray-600 text-sm">Nhấn giữ và di chuyển card giữa các cột</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-primary-50 hover:transform hover:translate-x-2">
                <div className="min-w-[40px] h-10 flex items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full text-white text-xl">
                  ✏️
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Chỉnh sửa tiêu đề</h4>
                  <p className="text-gray-600 text-sm">Click vào tiêu đề cột để chỉnh sửa</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-primary-50 hover:transform hover:translate-x-2">
                <div className="min-w-[40px] h-10 flex items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full text-white text-xl">
                  ➕
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Thêm card mới</h4>
                  <p className="text-gray-600 text-sm">Nhấn nút "Thêm card" để tạo task mới</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-primary-50 hover:transform hover:translate-x-2">
                <div className="min-w-[40px] h-10 flex items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full text-white text-xl">
                  📊
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Thêm cột mới</h4>
                  <p className="text-gray-600 text-sm">Tạo thêm cột để tổ chức workflow</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-primary-50 hover:transform hover:translate-x-2">
                <div className="min-w-[40px] h-10 flex items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full text-white text-xl">
                  🗑️
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Xóa items</h4>
                  <p className="text-gray-600 text-sm">Hover để hiện nút xóa card hoặc cột</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-primary-50 hover:transform hover:translate-x-2">
                <div className="min-w-[40px] h-10 flex items-center justify-center bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full text-white text-xl">
                  ⌨️
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phím tắt</h4>
                  <p className="text-gray-600 text-sm">Enter để lưu, Escape để hủy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrelloBoard;