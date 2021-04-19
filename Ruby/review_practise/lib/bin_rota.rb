
def bin_rota(seating)
  if seating[0].length == 1
    return seating.flatten!
  else 
    rota = []
    seating.each_with_index { | element, index |
      if index % 2 != 0
        reversed_order = element.reverse!
        rota.push(reversed_order)
      else 
        rota.push(element)
      end
    }
    p rota.flatten!
  end
end