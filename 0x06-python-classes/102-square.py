#!/usr/bin/python3

"""Define a class Square."""


class Square:
    def __init__(self, size=0):
        """Initialize a Square instance with a specified size."""
        self.__size = size

    @property
    def size(self):
        """Retrieve the size of the square."""
        return self.__size

    @size.setter
    def size(self, value):
        """Set the size of the square, with validation checks."""
        if not isinstance(value, (int, float)):
            raise TypeError("size must be a number")
        if value < 0:
            raise ValueError("size must be >= 0")
        self.__size = value

    def area(self):
        """Calculate and return the area of the square."""
        return self.__size ** 2

    def __eq__(self, other):
        """Compare two Square instances for equality based on their areas."""
        if isinstance(other, Square):
            return self.area() == other.area()
        return False

    def __ne__(self, other):
        """Compare two Square instances for inequality based on their areas."""
        return not self.__eq__(other)

    def __lt__(self, other):
        """Compare two Square instances based on their areas (less than)."""
        if isinstance(other, Square):
            return self.area() < other.area()
        return False

    def __le__(self, other):
        """Compare two Square instances based on their areas (less than or equal)."""
        if isinstance(other, Square):
            return self.area() <= other.area()
        return False

    def __gt__(self, other):
        """Compare two Square instances based on their areas (greater than)."""
        if isinstance(other, Square):
            return self.area() > other.area()
        return False

    def __ge__(self, other):
        """Compare two Square instances based on their areas (greater than or equal)."""
        if isinstance(other, Square):
            return self.area() >= other.area()
        return False
