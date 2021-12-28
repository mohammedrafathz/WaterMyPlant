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

        //@route   GET /api/plants/{id}
        //@desc    get plant by id
        //@access  Public
        [HttpGet("{id}")]
        public async Task<ActionResult<Plant>> GetPlantById(int id)
        {
            return await _context.Plants.FindAsync(id);
        }
    }
}