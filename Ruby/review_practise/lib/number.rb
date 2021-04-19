def number(list)
  positions = []
  list.each_with_index { |string, index| 
    positions << "#{index + 1}: #{string}" 
  }
  positions
end