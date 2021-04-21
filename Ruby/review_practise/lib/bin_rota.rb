
def bin_rota(seating)
  if seating[0].length == 1
    return seating.flatten!
  else 
    sort(seating)
  end
end

def sort(seating) 
  rota = []
  seating.each_with_index { | element, index |
      index % 2 != 0 ? rota.push(element.reverse!) : rota.push(element)
    }
  rota.flatten!
end
