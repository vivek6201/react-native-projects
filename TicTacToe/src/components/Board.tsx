import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Snackbar from 'react-native-snackbar';
import Icons from './Icons';

const Board = () => {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [isCross, setIsCross] = useState(false);
  const [gameWinner, setGameWinner] = useState('');

  const checkWinner = () => {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] &&
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2]
      ) {
        setGameWinner(board[i][0]);
        return board[i][0];
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] &&
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i]
      ) {
        setGameWinner(board[0][i]);
        return board[0][i];
      }
    }

    // Check diagonals
    if (
      board[0][0] &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]
    ) {
      setGameWinner(board[0][0]);
      return board[0][0];
    }
    if (
      board[0][2] &&
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0]
    ) {
      setGameWinner(board[0][2]);
      return board[0][2];
    }

    // No winner
    return null;
  };

  const reloadGame = () => {
    setBoard([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    setIsCross(false);
    setGameWinner('');
  };

  const handleChangeAction = (rowNumber: number, colNumber: number) => {
    if (gameWinner !== '')
      return Snackbar.show({
        text: `${gameWinner} won`,
        duration: Snackbar.LENGTH_SHORT,
      });
      

    if (board[rowNumber][colNumber] === '') {
      board[rowNumber][colNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      Snackbar.show({
        text: 'Position already filled',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red',
        textColor: '#FFF',
      });

      return;
    }

    checkWinner();
  };

  return (
    <View className="p-5 w-full h-full">
      {board.map((row, rowIndex) => (
        <View key={rowIndex} className="flex-row">
          {row.map((cell, cellIndex) => (
            <TouchableOpacity
              key={cellIndex}
              onPress={() => handleChangeAction(rowIndex, cellIndex)}
              className="flex-1 aspect-square border justify-center items-center">
              <Icons name={cell}/>
            </TouchableOpacity>
          ))}
        </View>
      ))}

      <TouchableOpacity
        className="w-full mx-auto py-2 flex items-center justify-center rounded-md mt-5 bg-blue-500"
        onPress={reloadGame}>
        <Text className="text-xl font-extrabold uppercase text-white">
          Reload Game
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Board;
