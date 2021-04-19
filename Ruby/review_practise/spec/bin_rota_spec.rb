
require './lib/bin_rota.rb'

seating_plan = [ ["Stefan", "Raj",    "Marie"],
  ["Alexa",  "Amy",    "Edward"],
  ["Liz",    "Claire", "Juan"],
  ["Dee",    "Luke",   "Katie"] ]

describe '#bin_rota' do 
  it 'returns the order for one seat per row' do
    expect(bin_rota([["a"], ["b"], ["c"] ])).to eq  [ "a", "b", "c" ]
  end

  it 'returns the order for one seat per row' do
    expect(bin_rota([  ["a", "A"], ["b", "B"], ["c", "C"] ])).to eq  [ "a", "A", "B", "b", "c", "C" ] 
  end


  it 'returns the order for 3 seats per row' do
    expect(bin_rota(seating_plan)).to eq  ["Stefan", "Raj", "Marie", "Edward", "Amy", "Alexa", "Liz", "Claire", "Juan", "Katie", "Luke", "Dee"]
  end



end