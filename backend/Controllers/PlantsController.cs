using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlantsController : ControllerBase
    {
        private readonly DataContext _context;
        public PlantsController(DataContext context)
        {
            _context = context;
        }

        //@route   GET /api/plants
        //@desc    gets all plant
        //@access  Public
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Plant>>> GetPlants()
        {
            return await _context.Plants.ToListAsync();
        }

        //@route   PUT /api/plants/{id}
        //@desc    get plant by id
        //@access  Public
        [HttpPut("{id}")]
        public async Task<ActionResult<IEnumerable<Plant>>> GetPlantById(int id, Plant plant)
        {
            var plt = await _context.Plants.FindAsync(id);
            plt.status = plant.status;
            if (plant.lastWateredAt != null)
            {
                plt.lastWateredAt = plant.lastWateredAt;
            }

            _context.Plants.Update(plt);
            await _context.SaveChangesAsync();
            return await _context.Plants.ToListAsync();
        }
    }
}